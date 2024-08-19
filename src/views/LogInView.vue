<template>
    <div>
        <h4>Already have an account? Login</h4>
        <table>
            <tr>
                <label>Username:</label><input type="text" v-model="username" placeholder="Enter your username"><br><br>
            </tr>
            <tr>
                <label>Password:</label><input type="password" v-model="password" placeholder="Enter your password"><br><br>
            </tr>
        </table>
        <button @click="login()">Submit</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username: '',
            password: ''
        }
    }, methods:{
        login(){
            this.$store.dispatch('loginUser',this.$data)
        }
    }
}
</script>
<style>
    
</style>