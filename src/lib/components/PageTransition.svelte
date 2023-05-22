<script lang="ts">
  import { fly, scale } from 'svelte/transition'
  import { quadOut } from 'svelte/easing'
  import PageWrapper from './PageWrapper.svelte'

  export let url: string
  export let duration = 400
</script>

<div class="grid grid-rows-1 grid-cols-1 overflow-hidden">
  {#key url}
    <div class="row-[1] col-[1]" in:fly={{ y: '-100%', duration, easing: quadOut }}>
      <slot name="nav" />
    </div>
  {/key}
</div>

<div class="grid grid-rows-1 grid-cols-1 flex-1 overflow-hidden">
  {#key url}
    <div
      class="row-[1] col-[1]"
      in:fly={{ y: '100%', opacity: 1, duration, easing: quadOut }}
      out:scale={{ start: 0.9, duration: duration, easing: quadOut }}
    >
      <PageWrapper>
        <slot />
      </PageWrapper>
    </div>
  {/key}
</div>
