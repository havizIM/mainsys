
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="<?= base_url() ?>assets/images/logo-rsi.png">
    <title>MainSys | Home</title>
    <!-- Custom CSS -->
    <link href="<?= base_url() ?>assets/home_assets/libs/owl.carousel/dist/assets/owl.carousel.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url() ?>assets/home_assets/libs/owl.carousel/dist/assets/owl.theme.default.min.css" rel="stylesheet" type="text/css" />
    <!-- Custom CSS -->
    <link href="<?= base_url() ?>assets/home_assets/css/style.min.css" rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body>
<!-- ============================================================== -->
<!-- Main wrapper -->
<!-- ============================================================== -->
    <div id="main-wrapper">
        <!-- ============================================================== -->
        <!-- Header part -->
        <!-- ============================================================== -->
        <header class="topbar">
            <div class="container">
                <!-- Start Header -->
                <div class="header p-t-20">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="javascript:void(0);">
                            <img src="<?= base_url() ?>assets/images/logo-rsi.png" style="width: 15%" alt="logo">
                            <span>
                                <img src="<?= base_url() ?>assets/images/logo-text-dark.png" style="width: 50%" align="logo">
                            </span>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item p-l-15">
                                    <a href="<?= base_url('login') ?>" class="btn btn-custom btn-info">Login</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="row header-banner align-items-center">
                        <div class="col-lg-5">
                            <h2>Welcome To <span class="font-bold"> Maintenance System</span></h2>
                            <p class="m-t-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <a href="<?= base_url('login') ?>" class="btn btn-custom-md btn-info m-t-40 m-b-40 dm-btn">Login</a>
                            
                        </div>
                        <div class="col-lg-6 offset-lg-1 text-right">
                            <img class="img-fluid" src="<?= base_url() ?>assets/images/engineer.svg" alt="db">
                        </div>
                    </div>
                </div>
                <!-- End Header -->
            </div>
        </header>
        <!-- ============================================================== -->
        <!-- Header part -->
        <!-- ============================================================== -->
        
        <!-- ============================================================== -->
        <!-- Page wrapper part -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Demos part -->
            <!-- ============================================================== -->
            <section id="demos" class="demos spacer bg-light">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <h1>Ready to use Applications for you</h1>
                            <p class="m-t-20">
								This application is available for three main users namely Administrator, Partner and Engineer
                            </p>
                        </div>
                        <div class="col-md-4 m-t-40">
                            <div class="live-box bg-light text-center p-t-30 p-b-0">
                                <img class="shadow img-fluid" src="<?= base_url() ?>assets/images/administrator.png" alt="d4" style="height: 220px;">
                                <div class="overlay">
                                    <a class="btn btn-danger live-btn" href="<?= base_url('administrator/') ?>">Go To Dashboard</a>
                                </div>
                            </div>
                            <div class="m-l-30 m-t-30">
                                <h3>Administrator</h3>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-40">
                            <div class="live-box bg-light text-center p-t-30 p-b-0">
                                <img class="shadow img-fluid" src="<?= base_url() ?>assets/images/engineer.jpg" alt="d4" style="height: 220px;">
                                <div class="overlay">
                                    <a class="btn btn-danger live-btn" href="<?= base_url('engineer/') ?>">Go To Dashboard</a>
                                </div>
                            </div>
                            <div class="m-l-30 m-t-30">
                                <h3>Engineer</h3>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-40">
                            <div class="live-box bg-light text-center p-t-30 p-b-0">
                                <img class="shadow img-fluid" src="<?= base_url() ?>assets/images/partner.jpg" alt="d4" style="height: 220px;">
                                <div class="overlay">
                                    <a class="btn btn-danger live-btn" href="<?= base_url('partner/') ?>">Go To Dashboard</a>
                                </div>
                            </div>
                            <div class="m-l-30 m-t-30">
                                <h3>Partner</h3>
                            </div>
                        </div>
                        
                    </div>
                </div>
			</section>
			
            <section id="feature2" class="feature2 spacer">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7 text-center">
                            <h1>Features which will Amaze you!</h1>
                            <p class="m-t-20">We know how important is for you to save time and create something stunning for your bussiness, its easily possible with <b>Maintenance System</b> 
                            </p>
                        </div>
                    </div>
                    <div class="row m-t-40">
						<div class="col-lg-3 col-md-6 text-center m-t-40">
                            <span class="feature-image">
                                <img src="<?= base_url() ?>assets/home_assets/images/s15.jpg" alt="f1">
                            </span>
                            <h4 class="m-t-30">Scheduling</h4>
                            <p class="m-t-20">We have included Maintenance Calendar application with Our System</p>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center m-t-40">
                            <span class="feature-image">
                                <img src="<?= base_url() ?>assets/home_assets/images/s13.jpg" alt="f1">
                            </span>
                            <h4 class="m-t-30">Preventive Maintenance</h4>
                            <p class="m-t-20">We have included Preventive Maintenance with Our System</p>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center m-t-40">
                            <span class="feature-image">
                                <img src="<?= base_url() ?>assets/home_assets/images/s14.jpg" alt="f1">
                            </span>
                            <h4 class="m-t-30">Corrective Maintenance</h4>
                            <p class="m-t-20">We have included Corrective Maintenance with Our System</p>
                        </div>
                        
                        <div class="col-lg-3 col-md-6 text-center m-t-40">
                            <span class="feature-image">
                                <img src="<?= base_url() ?>assets/home_assets/images/s12.jpg" alt="f1">
                            </span>
                            <h4 class="m-t-30">Reporting</h4>
                            <p class="m-t-20">Included Report View for you to know how we work</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ============================================================== -->
            <!-- Testimonial part -->
            <!-- ============================================================== -->
            <section id="testimonial" class="testimonial spacer bg-light">
                <span class="aboveline"></span>
                <div class="container">
                    <div class="row m-t-40 m-b-40 justify-content-center">
                        <div class="col-9">
                            <div class="owl-carousel owl-theme text-center" id="testi">
                                <div class="item">
                                    <img src="<?= base_url() ?>assets/home_assets/images/quote.png" alt="quote">
                                    <h3 class="m-t-30 m-b-30 quote">Look at a day when you are supremely satisfied at the end. It's not a day when you lounge around doing nothing; it's when you've had everything to do, and you've done it.</h3>
                                    <span class="text-info">Margaret Thatcher</span>
                                </div>
                                <div class="item">
                                    <img src="<?= base_url() ?>assets/home_assets/images/quote.png" alt="quote">
                                    <h3 class="m-t-30 m-b-30 quote">Only a genius can do things his own way. You? You're no genius.</h3>
                                    <span class="text-info">Haden</span>
                                </div>
                                <div class="item">
                                    <img src="<?= base_url() ?>assets/home_assets/images/quote.png" alt="quote">
                                    <h3 class="m-t-30 m-b-30 quote">The best way to predict the future is to invent it.</h3>
                                    <span class="text-info">Alan Kay</span>
                                </div>
                                <div class="item">
                                    <img src="<?= base_url() ?>assets/home_assets/images/quote.png" alt="quote">
                                    <h3 class="m-t-30 m-b-30 quote">If I had six hours to chop down a tree, I'd spend the first four hours sharpening the axe.</h3>
                                    <span class="text-info">Abraham Lincoln</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <span class="underline"></span>
            </section>
            <!-- ============================================================== -->
            <!-- Footer part -->
            <!-- ============================================================== -->
            <section id="footer" class="footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <img class="img-fluid" src="<?= base_url() ?>assets/images/contact.svg" alt="db">
                        </div>
                        <div class="col-lg-6 offset-lg-1">
                            <h1 class="m-t-40">Contact Us for use this <span class="font-bold">Application</span> & <span class="font-bold">Services</span> with <span class="text-info"> Maintenance System! </span></h1>
                            <p class="m-t-40">Ferry Setiawan - 081294739756 - ferrysetiawan0611@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- ============================================================== -->
        <!-- End page wrapperHeader part -->
        <!-- ============================================================== -->
    </div>
</body>
<!-- ============================================================== -->
<!-- All Jquery -->
<!-- ============================================================== -->
<script src="<?= base_url() ?>assets/home_assets/libs/jquery/dist/jquery.min.js"></script>
<script src="<?= base_url() ?>assets/home_assets/libs/popper.js/dist/umd/popper.min.js"></script>
<script src="<?= base_url() ?>assets/home_assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="<?= base_url() ?>assets/home_assets/libs/owl.carousel/dist/owl.carousel.min.js"></script>
<script src="<?= base_url() ?>assets/home_assets/js/custom.js"></script>

</html>