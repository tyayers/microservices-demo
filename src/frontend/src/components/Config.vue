<template>
    <div class="config-div">
        <div class="alert alert-danger" role="alert">
            Oops!  We have a slight issue with our configuration...
        </div>

        <div v-show="!authorized && !authorizing">
            <div><img width="300px" style="opacity: .4; margin: 60px;" src="img/dino2.jpg"/></div>
      
            <button type="button" v-on:click="authorize" class="btn btn-info config-div">Are you the admin? Click here to update the config...</button>
        </div>

        <div v-show="authorizing" style="text-align: left; margin: 30px;">
            <!-- <form> -->
                <div class="form-group">
                    <label for="adminInput">Admin Password:</label>
                    <input type="password" class="form-control" id="adminInput" aria-describedby="adminHelp" placeholder="Enter Admin Password">
                    <small id="adminHelp" class="form-text text-muted">(Hint: it's 'HipsterAdmin')</small>
                </div>
                <button type="button" v-on:click="cancel" class="btn btn-secondary config-button">Cancel</button>
                <button type="button" v-on:click="checkAuthorize" id="adminButton" class="btn btn-primary config-button">Submit</button>
            <!-- </form> -->
        </div>

        <div v-show="authorized" style="text-align: left; margin: 30px;">
            <!-- <form> -->
                <div class="form-group">
                    <label for="adminInput">Currency API Key:</label>
                    <input type="text" v-model="$root.currencyKey" class="form-control" id="currencyInput" placeholder="Enter Currency API Key">
                </div>
                <div class="form-group">
                    <label for="productInput">Product Catalog API Key:</label>
                    <input type="text" v-model="$root.productKey" class="form-control" id="productInput" placeholder="Enter Product Catalog API Key">
                </div>
                <div class="form-group">
                    <label for="recommendationInput">Recommendation API Key:</label>
                    <input type="text" v-model="$root.recommendationKey" class="form-control" id="recommendationInput" placeholder="Enter Recommendation API Key">
                </div>                                
                <button type="button" v-on:click="cancel" class="btn btn-secondary config-button">Cancel</button>
                <button type="button" v-on:click="save" class="btn btn-primary config-button">Save</button>
            <!-- </form> -->
        </div>


        <div class="config-div">
            
        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Config',
    data () {
        return {
            authorized: false,
            authorizing: false
        }
    },
    methods: {
        authorize: function (event) {
            this.authorizing = true;
            setTimeout(function() {
                document.getElementById("adminInput").focus();
            }, 100);
        },
        checkAuthorize: function (event) {
            if(document.getElementById("adminInput").value == "HipsterAdmin") {
                this.cancel();
                this.authorized = true;
            }
            else {
                this.cancel();
            }
        },
        cancel: function(event) {
            document.getElementById("adminInput").value = "";
            this.authorized = false;
            this.authorizing = false;
        },
        save: function(event) {
            localStorage.setItem("CURRENCY_KEY", document.getElementById("currencyInput").value);
            localStorage.setItem("PRODUCT_KEY", document.getElementById("productInput").value)
            localStorage.setItem("RECOMMENDATION_KEY", document.getElementById("recommendationInput").value)

            window.top.location.href = "/";
        }        
    },  
    mounted() {

        // Get the input field
        var input = document.getElementById("adminInput");

        // Execute a function when the user releases a key on the keyboard
        input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("adminButton").click();
        }
        });

    },  
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .config-div {
        margin-top: 15px;
    }

    .config-button {
        margin: 3px;
    }

</style>
