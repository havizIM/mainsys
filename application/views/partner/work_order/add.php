<div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center">
            <h4 class="page-title">Create Work Order</h4>
        </div>
        <div class="col-7 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#/dashboard">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="#/work_order">Work Order</a>
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
                <form class="form-horizontal" id="form_add">
                    <div class="card-body">
                        <h4 class="card-title">Partner Info</h4>
                        <div class="form-group row">
                            <label for="building_id" class="col-sm-3 text-right control-label col-form-label">Building</label>
                            <div class="col-sm-9">
                                <select class="form-control" id="building_id" name="building_id">
                                    <option value="" disabled="" selected="">-- Choose Building --</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="equipment_id" class="col-sm-3 text-right control-label col-form-label">Equipment</label>
                            <div class="col-sm-9">
                                <select class="form-control" id="equipment_id" name="equipment_id" disabled="">
                                    <option value="" disabled="" selected="">-- Choose Equipment --</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="date" class="col-sm-3 text-right control-label col-form-label">Date</label>
                            <div class="col-sm-9">
                                <input type="date" name="date" id="date" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="description" class="col-sm-3 text-right control-label col-form-label">Description</label>
                            <div class="col-sm-9">
                                <textarea class="form-control" id="description" name="description" rows="15"></textarea>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="card-body">
                        <div class="row pb-2">
                            <div class="col-md-6 text-left">
                                <h4 class="card-title">Photos</h4>
                            </div>    
                            <div class="col-md-6 text-right">
                                <button type="button" class="btn btn-info btn-small btn_add_row" id="btn_add_row"><i class="fa fa-plus"></i></button>
                            </div>    
                        </div>

                        <table class="table" id="t_add_photo">
                            <tr id="row_0">
                                <td>
                                    <div class="form-group">
                                        <input type="file" class="dropify" name="photo[0]" id="photo_0" required>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <hr>
                    <div class="card-body">
                        <div class="form-group m-b-0 text-right">
                            <a href="#/work_order" class="btn btn-dark waves-effect waves-light">Cancel</a>
                            <button type="submit" class="btn btn-info waves-effect waves-light">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<footer class="footer text-center">
    Develop Using Framework MIT License Codeigniter copyright (c) 2014 - 2019. British Columbia Institute of Technology.
</footer>

<script type="module">
    import workOrderController from '<?= base_url() ?>src/partner/modules/work_order.js';
    workOrderController.add('<?= $this->session->userdata('api_token') ?>')
</script>