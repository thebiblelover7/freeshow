<script lang="ts">
    import { activeFocus, activeShow, focusMode, showsCache } from "../../../stores"
    import T from "../../helpers/T.svelte"

    export let currentOutput: any
    export let ref: any[]
    export let linesIndex: null | number
    export let maxLines: null | number

    $: slide = currentOutput?.out?.slide

    $: name = slide && $showsCache[slide?.id] ? $showsCache[slide?.id].name : "—"
    $: length = ref?.length || 0

    function openShow() {
        if (!slide || slide.id === "temp") return

        if (slide?.layout && $showsCache[slide!.id]) {
            showsCache.update((a: any) => {
                a[slide!.id].settings.activeLayout = slide?.layout
                return a
            })
        }

        if ($focusMode) activeFocus.set({ id: slide?.id })
        else activeShow.set({ id: slide?.id })
    }
</script>

{#if slide}
    <span class="name" style="justify-content: space-between;" on:click={openShow}>
        <p>
            {#if name.length}
                {name}
            {:else}
                <T id="main.unnamed" />
            {/if}
        </p>
        <span style="opacity: 0.6;white-space: nowrap;">
            {(slide?.index || 0) + 1}/{length}
            {#if linesIndex !== null && maxLines !== null}
                ({linesIndex + 1}/{maxLines})
            {/if}
        </span>
    </span>
{/if}

<style>
    .name {
        display: flex;
        justify-content: center;
        padding: 5px 10px;
        opacity: 0.8;

        cursor: pointer;
    }

    .name:hover {
        background-color: var(--primary-darker);
    }
</style>
