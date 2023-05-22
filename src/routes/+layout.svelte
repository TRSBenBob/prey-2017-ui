<script lang="ts">
  import '../app.postcss'

  import type { PageData } from './$types'

  import PageTransition from '$lib/components/PageTransition.svelte'

  import Tilt from '$lib/components/Tilt.svelte'
  import TopNav from '$lib/components/TopNav.svelte'
  import SubNav from '$lib/components/SubNav.svelte'

  export let data: PageData
</script>

<div class="w-screen h-screen overflow-hidden bg-woodsmoke">
  <Tilt amount="5deg">
    <div class="flex flex-col pt-12 h-full">
      <TopNav />

      <hr class="mt-[2px] border-t border-cape-cod" />

      <PageTransition url={data.url.toString()}>
        <SubNav slot="nav" />

        <slot />
      </PageTransition>

      <hr class="mb-24 border-t border-cape-cod" />
    </div>
  </Tilt>
</div>
