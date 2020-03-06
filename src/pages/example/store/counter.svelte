<script>
    import {count, add, minus} from '../../../store/counter.js'

</script>
<button on:click={add}>+</button>
{$count}
<button on:click={minus}>-</button>