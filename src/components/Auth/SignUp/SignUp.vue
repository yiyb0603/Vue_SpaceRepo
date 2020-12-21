<template>
  <div class='SignUp'>
    <div class='SignUp-Top'>
      <div class='SignUp-Top-Title'>회원가입</div>
      <div class='SignUp-Top-SubTitle'>회원가입을 통해서 더 많은것을 둘러보세요!</div>
    </div>

    <div class='SignUp-Form'>
      <auth-input type='text' v-model='name' placeholder='닉네임을 입력하세요.' />
      <auth-input type='email' v-model='email' placeholder='이메일을 입력하세요.' />
      <auth-input type='password' v-model='password' placeholder='비밀번호를 입력하세요.' />
      <auth-input type='password' v-model='rePassword' placeholder='비밀번호를 재입력 하세요.' />
    </div>

    <div class='SignUp-Icons' @click='setPageType(LOGIN)'>
      <v-icon>support</v-icon>
      <div>이미 계정이 있으신가요?</div>
    </div>

    <auth-button :requestFunction='getEmailCode' name='다음으로' />
  </div>
</template>

<style lang='scss'>
  @import './SignUp.scss';
</style>

<script lang='ts'>
import Vue from 'vue';
import AuthButton from '../../Common/Auth/Button';
import AuthInput from '../../Common/Auth/AuthInput';
import { postRequest } from '../../../lib/Axios';
import { PageTypes } from '../../../enum/AuthPageEnum';

export default Vue.extend({
  components: {
    AuthInput,
    AuthButton,
  },

  props: {
    pageType: Number,
  },

  methods: {
    setPageType(pageType: number) {
      this.$emit('onClick', pageType, this.registerInfo);
    },

    async getEmailCode() {
      const { name, email, password } = this;
      const { status } = await postRequest('/auth/send', { email });

      if (status === 200) {
        this.registerInfo = {
          name,
          email,
          password,
          code: '',
        }

        console.log('이메일 코드 전송 성공.');
        this.setPageType(this.EMAIL);
      }
    }
  },

  data() {
    const { EMAIL, LOGIN } = PageTypes;
    
    return {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      code: '',
      registerInfo: {},
      EMAIL,
      LOGIN,
    };
  },
});
</script>