<script setup></script>

<template>
    <section class="header">
        <nav class="navbar bg-primary navbar-expand-md" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"
                    ><img src="../assets/img/logo-small.png" alt=""
                /></a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/"
                                >Home</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/second"
                                >Second</router-link
                            >
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button class="btn btn-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </section>
</template>

<style lang="scss" scoped>
.navbar-brand {
    img {
        max-width: 100px;
    }
}
</style>
