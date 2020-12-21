<template>
  <div class='Email'>
    <div class='Email-Top'>
      <div class='Email-Top-Title'>이메일 인증</div>
      <div class='Email-Top-SubTitle'>전송된 이메일 코드를 입력해주세요.</div>
    </div>

    <div class='Email-Form'>
      <auth-input type='text' v-model='code' placeholder='이메일 코드를 입력하세요.' />
    </div>

    <auth-button :requestFunction='handleSignIn' name='회원가입' />
  </div>
</template>

<style lang='scss'>
  @import './Email.scss';
</style>

<script lang='ts'>
import { PageTypes } from '../../../enum/AuthPageEnum';
import Vue from 'vue';
import { postRequest } from '../../../lib/Axios';
import AuthInput from '../../Common/Auth/AuthInput';
import AuthButton from '../../Common/Auth/Button';

export default Vue.extend({
  name: 'Email',

  props: {
    registerInfo: Object,
  },

  components: {
    AuthInput,
    AuthButton,
  },

  methods: {
    async handleSignIn() {
      const { name, email, password } = this.registerInfo;
      const { code } = this;

      const checkEmailCode = await postRequest('/auth/check', { email, code });
      const request = {
        name,
        email,
        password,
      };

      if (checkEmailCode.status === 200) {
        const { status } = await postRequest('/auth/signup', request);
        const { LOGIN } = PageTypes;

        if (status === 200) {
          console.log('회원가입 성공.');
          this.$emit('onClick', LOGIN);
        }
      }
    }
  },

  data() {
    const { code } = this.registerInfo;

    return {
      code,
    };
  },
});
</script>