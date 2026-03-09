

<script setup lang="ts">

import { ref } from 'vue'

import type { DateValue } from 'reka-ui'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

const fecha = ref<DateValue>()

</script>



<template>
     <Popover required>
        <PopoverTrigger asChild> 
            <Button class="w-full border border-[rgba(255,255,255,0.4)] bg-transparent hover:bg-[rgba(255,255,255,0.3)] cursor-pointer backdrop-blur-md"> 
                <span v-if="fecha">
                    {{ fecha.day }}/{{ fecha.month }}/{{ fecha.year }}
                </span>
                <span v-else>
                    Selecciona una fecha.
                </span>
            </Button>
        </PopoverTrigger>
        <PopoverContent>
            <Calendar v-model="fecha"/>
        </PopoverContent>
    </Popover>
</template>



<style scoped>

</style>