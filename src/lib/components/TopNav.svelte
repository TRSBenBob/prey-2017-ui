<script>
  import TopNavLink from './TopNavLink.svelte'
</script>

<nav
  class="
    grid grid-flow-col grid-cols-[4rem_auto_4rem] place-items-center
    border-y border-y-cape-cod
    text-white text-center uppercase text-2xl font-extralight
  "
>
  <ul class="top-nav grid grid-flow-col grid-cols-6 col-start-2 w-full">
    <TopNavLink href="/objectives" label="Objectives" />
    <TopNavLink href="/map" label="Map" />
    <TopNavLink href="/inventory" label="Inventory" />
    <TopNavLink href="/neuromods" label="Neuromods" />
    <TopNavLink href="/status" label="Status" />
    <TopNavLink href="/data" label="Data" />
  </ul>
</nav>
