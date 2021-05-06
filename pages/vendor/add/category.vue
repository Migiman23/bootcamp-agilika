<template>
    <v-container>
           <v-card
            class="card-container d-flex pt-15 pb-15 pl-15 pr-15 flex-column align-center justify-center mt-15 mb-15"
        >
            <v-spacer></v-spacer>
            <h2 class="mb-12">Select Category</h2>
            <v-select></v-select>
            <v-spacer />
            <v-row>
                <v-col class="column">
                    <button class="ps-btn ps-btn--red">CANCEL</button>
                </v-col>
                <v-col class="column">
                    <button class="ps-btn">CONTINUE</button>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {};

</script>

<style scoped>
.card-container {
    height: fit-content;
}
button {
    min-width: 175px;
    max-height: 50px;
}
.column {
    text-align: center;
}
</style>
