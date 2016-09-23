<header class="hero" style="background-image: url('$ThemeDir/images/home.jpg')">
    <div class="container full-height">
        <div class="row full-height">
            <div class="col-sm-12 full-height">
                <div class="hero-content">
                    <h1 class="hero-heading text-white">Zomato</h1>

                    <div class="hero-search">
                        <!-- Split button -->
                        <div class="btn-group">
                            <button type="button" class="button search-button">Action</button>
                            <button type="button" class="button  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="caret"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="button search-button">Action</button>
                            <button type="button" class="button  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="caret"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</header>


<section>
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-md-offset-1 col-sm-10">
                $Form
                <h3>Zomato API Categories</h3>
                <% loop $ZomatoMenu %>
                    <p>Name: $Name</p>
                <% end_loop %>
            </div>
        </div>
    </div>
    </div>
</section>

