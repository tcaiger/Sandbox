<!DOCTYPE html>
<html lang="en">

<head>
    <% base_tag %>
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title $MetaDescription</title>
    $MetaTags(false)
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/favicon.ico">

    <%-- <link rel="icon" type="image/png" sizes="192x192" href="$ThemeDir/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="$ThemeDir/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="$ThemeDir/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="$ThemeDir/icons/favicon-16x16.png">--%>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link href="//fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet">

</head>

<body class="$ClassName">
    <% include Header %>
    $Layout
    <% include Footer %>
</body>
</html>
