<template>
    <div>
        <footer>
            <div id="foot">
                <div class="cr">
                    CopyRight &#169; {{year()}} made by Keegan Niekerk
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    methods:{
        year(){
            const y = new Date();
            return y.getFullYear();
        }
    }
}
</script>
<style>
@media screen and (max-width:750px){
    .cr{
        font-size:14px
    }
}

#foot{
    position: sticky;
    bottom: 0;
    border: solid 3px white;
    width: 100%;
    height: 8vh;
    text-align: center;
    font-size: 2vh;
    line-height: 1.1;
    color: rgb(255, 255, 255);
    align-content: center;
    background: #2c3e50;
}
</style>