<template>
  <div class='SignIn'>
    <div class='SignIn-Top'>
      <div class='SignIn-Top-Title'>로그인</div>
      <div class='SignIn-Top-SubTitle'>로그인을 통해서 더 많은것을 둘러보세요!</div>
    </div>

    <div class='SignIn-Form'>
      <auth-input type='email' v-model='email' placeholder='이메일을 입력하세요.' />
      <auth-input type='password' v-model='password' placeholder='비밀번호를 입력하세요.' />
    </div>

    <div class='SignIn-Icons' @click='setPageType(REGISTER)'>
      <v-icon>support</v-icon>
      <div>아직 계정이 없으신가요?</div>
    </div>

    <auth-button :requestFunction='handleLogin' name='로그인' />
  </div>
</template>

<style lang='scss'>
@import './SignIn.scss';
</style>

<script lang='ts'>
import Vue from 'vue';
import { sha512 } from 'js-sha512';
import { postRequest } from '../../../lib/Axios';
import { SERVER } from 'config/config.json';
import { ISuccessTypes } from 'interface/Response';
import { PageTypes } from '../../../enum/AuthPageEnum';
import AuthInput from '../../Common/Auth/AuthInput';
import AuthButton from '../../Common/Auth/Button';

export default Vue.extend({
  name: 'SignIn',

  components: {
    AuthInput,
    AuthButton,
  },

  data() {
    const { REGISTER } = PageTypes; 
    return {
      email: '',
      password: '',
      REGISTER,
    };
  },

  methods: {
    setPageType(pageType: number) {
      this.$emit('onClick', pageType);
    },

    async handleLogin() {
      const { email, password } = this;

      const request: any = {
        email,
        password: sha512(password),
      };

      const { status }: ISuccessTypes = await postRequest('/auth/signin', request);
      if (status === 200) {
        console.log('로그인 성공.');
      }
    },
  },
});
</script>
