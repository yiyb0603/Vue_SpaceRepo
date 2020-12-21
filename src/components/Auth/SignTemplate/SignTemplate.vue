<template>
  <div class='SignTemplate'>
    <div class='SignTemplate-Box'>
      <div class='SignTemplate-Box-LeftPanel'>
        <div class='SignTemplate-Box-LeftPanel-Title'>YLog에 오신것을 환영합니다!</div>
        <sign-in v-if='pageType === LOGIN' @onClick='setPageData' />
        <sign-up v-else-if='pageType === REGISTER' :pageType="pageType" @onClick='setPageData' />
        <email :registerInfo="registerInfo" v-else-if='pageType === EMAIL' @onClick='setPageData' :pageType="pageType" />
      </div>

      <div class='SignTemplate-Box-RightPanel'>
        <img src='@/assets/images/Banner.svg' />
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
  @import './SignTemplate.scss';
</style>

<script lang='ts'>
import Vue from 'vue';
import Email from '../Email';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { PageTypes } from '../../../enum/AuthPageEnum';

export default Vue.extend({
  name: 'SignTemplate',
  components: {
    SignIn,
    SignUp,
    Email,
  },

  data() {
    const { LOGIN, REGISTER, EMAIL } = PageTypes;

    return {
      pageType: 0,
      registerInfo: {},
      LOGIN,
      REGISTER,
      EMAIL,
    };
  },

  methods: {
    setPageData(pageType: number, registerInfo: Object) {
      this.pageType = pageType;
      this.registerInfo = registerInfo;
    }
  }
});
</script>
