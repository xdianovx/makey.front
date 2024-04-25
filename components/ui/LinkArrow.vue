<template>
  <NuxtLink :href="link" class="link">
    <span>
      <slot />
    </span>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <mask
          id="mask0_3032_21298"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16"
        >
          <rect width="16" height="16" />
        </mask>
        <g mask="url(#mask0_3032_21298)">
          <path
            d="M10.6667 5.60016L4.73337 11.5335C4.61114 11.6557 4.45559 11.7168 4.2667 11.7168C4.07781 11.7168 3.92225 11.6557 3.80003 11.5335C3.67781 11.4113 3.6167 11.2557 3.6167 11.0668C3.6167 10.8779 3.67781 10.7224 3.80003 10.6002L9.73337 4.66683H4.6667C4.47781 4.66683 4.31948 4.60294 4.1917 4.47516C4.06392 4.34739 4.00003 4.18905 4.00003 4.00016C4.00003 3.81127 4.06392 3.65294 4.1917 3.52516C4.31948 3.39738 4.47781 3.3335 4.6667 3.3335H11.3334C11.5223 3.3335 11.6806 3.39738 11.8084 3.52516C11.9361 3.65294 12 3.81127 12 4.00016V10.6668C12 10.8557 11.9361 11.0141 11.8084 11.1418C11.6806 11.2696 11.5223 11.3335 11.3334 11.3335C11.1445 11.3335 10.9861 11.2696 10.8584 11.1418C10.7306 11.0141 10.6667 10.8557 10.6667 10.6668V5.60016Z"
          />
        </g>
      </g>
    </svg>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["link"]);
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: $textGray;
  span {
    position: relative;
    font-size: 14px;
    line-height: 130%;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background: $textGray;
      bottom: 0;
    }
  }

  svg {
    fill: $textGray;
  }
}
</style>
