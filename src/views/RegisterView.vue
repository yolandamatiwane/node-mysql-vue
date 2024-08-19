<template>
    <div v-if="!$cookies.get('token')">
        <button @click="signUp = !signUp">SignUp/LogIn</button>
        <div class="signup" v-if="signUp">
        <h5>Register user:</h5>
        <label>Name</label><input type="text" v-model="name" placeholder="Enter your name"><br><br>
        <label>Surname</label><input type="text" v-model="surname" placeholder="Enter your Surname"><br><br>
        <label>Age</label><input type="text" v-model="age" placeholder="Enter your age"><br><br>
        <label>Favourite Coding Language:</label><input type="text" v-model="code" placeholder="Enter your favourite coding language"><br><br>
        <label>Favourite Car:</label><input type="text" v-model="car" placeholder="Enter your favourite car"><br><br>
        <label>Eye-color</label><input type="text" v-model="color" placeholder="Enter your eye color"><br><br>
        <label>Username:</label><input type="text" v-model="username" placeholder="Create a username"><br><br>
        <label>Password:</label><input type="text" v-model="password" placeholder="Create a password"><br><br>
        <!-- sotyi26 -->
        <button @click="addUser()">Register</button>
    </div>
    <div v-else>
        
        <h4>Already have an account? Login</h4>
        <label>Username:</label><input type="text" v-model="username" placeholder="Enter your username"><br><br>
        <label>Password:</label><input type="password" v-model="password" placeholder="Enter your password"><br><br>
        <button @click="login()">Submit</button>
    </div>
    </div>
    <!-- <div v-else>
    <about-view/>

    </div> -->
    
</template>
<script>
// import AboutView from './AboutView.vue';
export default {
    // components:{
    //     AboutView
    // },
    data(){
        return{
            name: '',
            surname: '',
            age:'',
            code: '',
            car:'',
            color:'',
            username:'',
            password:'',
            signUp:true
        }
    },methods:{
        addUser(){
            this.$store.dispatch('addUser',this.$data)
        },
        login(){
            this.$store.dispatch('loginUser',{username:this.username, password:this.password})
            location.reload()
        }
    }
}
</script>
<style>
    /* .signup{
      color  : pink;
    } */
    
</style>