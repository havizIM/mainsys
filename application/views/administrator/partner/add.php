<div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center">
            <h4 class="page-title">Add Partner</h4>
        </div>
        <div class="col-7 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#/dashboard">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="#/partner">Partner</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Add</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row">

        <div class="col-12">
            <div class="card" id="add_container">
                <div class="card-body">

                    <div class="row">
                        <div class="col-md-12">
                            <form id="form_add">
                                <div class="row">
                                    <div class="col-md-8">
                                            <div class="form-group">
                                                <label for="contact_name">Partner Name</label>
                                                <input type="text" class="form-control" id="partner_name" name="partner_name">
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-md-6">
                                                    <label for="pic">Phone</label>
                                                    <input type="text" class="form-control" id="phone" name="phone">
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="pic">Fax</label>
                                                    <input type="text" class="form-control" id="fax" name="fax">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-md-6">
                                                    <label for="pic">Handphone</label>
                                                    <input type="text" class="form-control" id="handphone" name="handphone">
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="pic">Email</label>
                                                    <input type="text" class="form-control" id="email" name="email">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-md-6">
                                                    <label for="pic">Website</label>
                                                    <input type="text" class="form-control" id="website" name="website">
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="pic">NPWP</label>
                                                    <input type="text" class="form-control" id="npwp" name="npwp">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="memo">Address</label>
                                                <textarea class="form-control" id="address" name="address"></textarea>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-md-6">
                                                    <label for="phone">City</label>
                                                    <select class="form-control" id="city_id" name="city_id">
                                                        <option value="" disabled="" selected="">-- Choose --</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="fax">Province</label>
                                                    <select class="form-control" id="province_id" name="province_id">
                                                        <option value="" disabled="" selected="">-- Choose --</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="memo">Other Information</label>
                                                <textarea class="form-control" id="other_information" name="other_information"></textarea>
                                            </div>
                                            
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="picture">Logo</label>
                                            <input type="file" class="dropify" name="logo" id="logo">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group text-right">
                                            <a class="btn btn-md btn-danger" href="#/partner">Cancel</a>
                                            <button class="btn btn-md btn-info" type="submit">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="footer text-center">
    Develop Using Framework MIT License Codeigniter copyright (c) 2014 - 2019. British Columbia Institute of Technology.
</footer>

<script type="module">
    import partnerController from '<?= base_url() ?>src/administrator/modules/partner.js';
    partnerController.add('<?= $this->session->userdata('api_token') ?>')
</script>