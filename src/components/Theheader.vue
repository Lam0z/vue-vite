<script setup></script>
<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <div class="header__logo-container">
                    <a class="header__logo-link" href="#">
                        <img
                            src="@/assets/img/header-logo.svg"
                            alt="logo"
                            class="header__logo"
                        />
                        MyFilms.com
                    </a>
                </div>

                <div class="header__search">
                    <input type="text" class="form-control" />
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    padding: 10px 0;
    box-shadow: 0px -5px 5px -5px rgba(0, 255, 75, 0.5) inset;
    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        // text-align: center;
    }
    &__logo {
        max-width: 30px;
    }
}
</style>
