<script lang="ts">
  import { page } from '$app/stores'

  export let href: string
  export let label: string
</script>

<li
  class="py-2 transition-transform duration-[50ms]"
  class:active={$page.url.pathname.startsWith(href)}
>
  <a class="drop-shadow-coffee-bean" {href}>{label}</a>
</li>

<style lang="postcss">
  .active {
    @apply relative bg-picton-blue -translate-y-1 -translate-x-2;
  }

  .active::after {
    content: '';

    position: absolute;
    top: -100%;
    left: 0.5rem;
    right: 0.5rem;
    bottom: 100%;

    background: linear-gradient(
      to top,
      color-mod(theme('colors.picton-blue') alpha(75%)),
      color-mod(theme('colors.picton-blue') alpha(50%))
    );
  }

  .active a {
    @apply drop-shadow-fader;
  }
</style>
