<template>
    <div class="row m-0 d-flex justify-content-end">
        <b-button v-if="user===null || !user.PCAuthenticated" v-b-modal.modal-1 style="width: fit-content">Login</b-button>

        <h1 v-else>
            {{user.Name + " - " + user.Email}}
        </h1>

        <b-modal id="modal-1" hide-footer hide-header centered content-class="modal-login">
            <span class="logo-icon"></span>
            <div class="content-fg">
                <hgroup>
                    <h6>Playlister.club</h6>
                    <h3 style="margin-top: 0px;">Account Login</h3>
                </hgroup>
                <div class="form-item">
                    <label for="">Email:</label>
                    <input type="text" class="modal-input" v-model="email">
                </div>
                <div class="form-item">
                    <label for="">Password:</label>
                    <input type="password" class="modal-input" v-model="password">
                </div>
            </div>
            <div class="footnote"><!---->
                <p><a>Forgot Password?</a></p>
            </div>
            <div class="row">
                <button class="col modal-btn">Cancel</button>
                <button class="col modal-btn" @click="login">Login</button>
            </div>
        </b-modal>
    </div>
</template>

<script>

export default {
    props: {
        user: Object,
    },
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        login(){
            this.$emit('login', {email: this.email, password: this.password})
            this.$bvModal.hide('modal-1')
        },
    }
}
</script>

<style>
.logo-icon {
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 50%;
    margin-top: -16px;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    width: 60px;
    height: 60px;
    text-indent: -9999px;
    background: transparent url(https://www.playlister.club/dashboard/assets/img/LogoIconSolid.svg) no-repeat 50%;
    background-size: contain;
    display: inline-block;
    z-index: 100;
}

.modal-login .content-fg {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: auto;
}

.modal-login .content-fg {
    position: relative;
    z-index: 2;
    padding: 1rem;
}

.modal-login .footnote {
    font-size: .65rem;
    color: #000;
    opacity: .6;
    padding-top: .25rem;
    border-top: 1px solid rgba(0,0,0,.15);
}

.modal-login button {
    background: transparent;
    margin: 1rem;
    display: inline-block;
    padding: .5rem 1rem;
    color: #f5f5f4;
    border: none;
    cursor: pointer;
}

.modal-login .modal-btn {
    background: rgba(0,0,0,.25);
    border: 1px solid hsla(0,0%,100%,0);
    margin: .5rem;
    background-color: #2ec4b6;
}

.modal-login .form-item {
    padding: 0 25px;
    position: relative;
}

.modal-login label {
    font-weight: 300;
    font-size: .75rem;
    margin-top: .5rem;
    opacity: .75;
}

.modal-input {
    background-color: rgba(0,0,0,.05);
    border: 1px solid rgba(0,0,0,.1);
    width: 100%;
    font-size: .9rem;
    padding: .5rem 1rem;
    color: inherit;
}

.modal-login hgroup {
    text-align: center;
}

.modal-login h6 {
    font-weight: 300;
    margin-top: .5rem;
    font-size: .75rem;
    line-height: 1.5rem;
    margin-bottom: 0;
}

.modal-login h3 {
    font-size: 1.25rem;
    font-weight: 300;
    font-family: Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
}
</style>