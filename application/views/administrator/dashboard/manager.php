<div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center">
            <h4 class="page-title">Dashboard</h4>
        </div>
        <div class="col-7 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
                <!-- <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav> -->
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body" id="bussiness_container">
                    <div class="d-flex align-items-center">
                        <div>
                            <h4 class="card-title mb-0">Bussiness</h4>
                        </div>
                        <div class="ml-auto">
                            <select class="custom-select border-0 text-muted" id="bussiness_filter">
                            </select>
                        </div>
                    </div>
                    <canvas id="bussiness_chart" height="100"></canvas>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card">
                <div class="card-body" id="debt_container">
                    <h4 class="card-title">Debt</h4>
                    <canvas id="debt_chart"></canvas>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card">
                <div class="card-body" id="receiveable_container">
                    <h4 class="card-title">Receiveable</h4>
                    <canvas id="receiveable_chart"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="footer text-center">
    All Rights Reserved by Universitas Esa Unggul. Designed and Developed by
    <a>Ferry Setiawan</a>.
</footer>

<script type="module">
    import dashboardController from '<?= base_url() ?>src/modules/dashboard.js';
    dashboardController.init('<?= $this->session->userdata('api_token') ?>')
</script>