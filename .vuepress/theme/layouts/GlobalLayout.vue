<template>
  <div id="global-layout">
    <component :is="$page.path ? 'Layout' : 'NotFound'" />
    <footer class="siteFooter">
      <div class="container">
        <p class="siteFooterContact">
          qudwls185@naver.com . +82 10-5185-8462 .
          <a href="https://github.com/sunrabbit123" target="_blank">GitHub</a> .
          <a
            href="https://github.com/sunrabbit123/Tech_Interview/"
            target="_blank"
            >Repository</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>
