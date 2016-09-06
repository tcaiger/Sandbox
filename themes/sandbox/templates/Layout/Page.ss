<section class="page-main">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-8 col-md-offset-1 col-sm-10">
                <h1 class="page-heading text-brand">$Title</h1>
                $Content
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

