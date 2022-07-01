<header>
    <section class="nav-bar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <a href="javascript:" class="logo">
                        <img src="<?php echo $siteurl ?>assets/images/logo.png" titile="SilkDigitizing" alt="Logo">
                    </a>
                </div>

                <div class="col-md-9">
                    <div class="mobile-screen">
                        <a href="javascript:" onclick="navOpen()" class="btn" id="list-btn">
                            <i class="fas fa-bars"></i>
                        </a>
                    </div>
                    <a href="javascript:" onclick="navClosed()" class="btn" id="cross">
                        <i class="fas fa-times"></i>
                    </a>
                    <nav class="mobile-view main-menu" id="menu-list">
                        <ul class="menu">
                            <li><a href="<?php echo $siteurl ?>/">Home</a></li>
                            <li><a href="<?php echo $siteurl ?>/work/">Work</a></li>

                            <!-- Dropdown start -->
                            <!-- <li class="nav-item dropdown">
                                <a class="dropdown-toggle" href="<?php echo $siteurl ?>/">Services</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:">Non-Fiction</a>
                                    <a class="dropdown-item" href="<?php echo $siteurl ?>javascript:">Biography</a>
                                    <a class="dropdown-item" href="<?php echo $siteurl ?>javascript:">Autobiography</a>
                                    <a class="dropdown-item" href="<?php echo $siteurl ?>javascript:">Memoir Writing</a>
                                </div>
                            </li> -->
                            <!-- Dropdown end -->

                            <li><a href="<?php echo $siteurl ?>/about">About Us</a></li>
                            <li><a href="<?php echo $siteurl ?>/pricing/">Pricing</a></li>
                            <li><a href="<?php echo $siteurl ?>/contact-us/">Contact</a></li>
                            <li><a href="<?php echo $siteurl ?>/patches/">Patches</a></li>
                            <li><a href="<?php echo $siteurl ?>/portfolio/">Portfolio</a></li>
                            <li><a href="<?php echo $siteurl ?>/blog/">Blog</a></li>
                            <div class="social-icons-nav">
                                <li> <a href="javascript:"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="javascript:"><i class="fab fa-linkedin-in"></i></a> </li>
                                <li><a href="javascript:"><i class="fab fa-facebook-f"></i></a></li>
                            </div>
                            <div class="nav_btns">
                                <li><a class="btn btn_signup" href="<?php echo $siteurl ?>/">Sign Up</a></li>
                                <li><a class="btn btn_login" href="<?php echo $siteurl ?>/">Login</a></li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</header>