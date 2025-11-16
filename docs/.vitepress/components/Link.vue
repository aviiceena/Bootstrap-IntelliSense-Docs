<script setup lang="ts">
import { meta } from '../constants';

interface Props {
  type: 'releases' | 'marketplace' | 'github';
}

const props = defineProps<Props>();

const linkMap = {
  releases: meta.releasesLink,
  marketplace: meta.marketplaceLink,
  github: meta.githubLink,
};

const link = linkMap[props.type];
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer"><slot /></a>
</template>

