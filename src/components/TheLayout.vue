<script setup></script>
<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <div class="header__logo">
                    <p>КИНО</p>
                </div>
                <nav class="nav header__nav">
                    <div class="header__nav-item">
                        <RouterLink to="/" class="header__nav-link"
                            >Main</RouterLink
                        >
                    </div>
                    <div class="header__nav-item">
                        <RouterLink to="/my-films" class="header__nav-link"
                            >My films</RouterLink
                        >
                    </div>
                </nav>
                <div class="profile header__profile">
                    <img
                        src="@/assets/img/logo.svg"
                        alt="profile logo"
                        class="profile__logo header__profile-logo"
                    />
                </div>
            </div>
        </div>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer__container">
                <p>© 2024</p>
                <p>Проект для портфолио</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.header {
    background: var(--second-color);
    padding: 0.5rem 0;
    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
    }

    &__nav {
        display: flex;
        &-item {
            // margin-right: 1rem;
            padding: 0.5rem;
            &:last-child {
                // margin-right: 0;
            }
            &:hover {
                background: var(--color);
            }
        }
        &-link {
            color: inherit;
        }
    }

    &__profile {
    }

    &__profile-logo {
        width: 100%;
        height: 100%;
        max-width: 2rem;
        border-radius: 50%;
        background: var(--second-color);
        transition: var(--transition);
        &:hover {
            opacity: 0.8;
        }
    }
}
.container {
}
.nav {
}
.profile {
    &__logo {
    }
}

.footer {
    background: var(--second-color);
    &__container {
        padding: 1rem 0;
        // border-top: 1px solid var(--text-color);
        display: flex;
        justify-content: space-between;
    }
}
</style>
