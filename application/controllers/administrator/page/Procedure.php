<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Procedure extends CI_Controller {

    function __construct()
    {
		parent::__construct();
        $this->load->library('session');
        $this->roles = $this->session->userdata('roles');
        
        if(!$this->session->has_userdata('logged_in')){
            redirect('unauthenticated');
        }

    }
    
    public function detail($id)
	{
		$data['id'] = $id;
		$this->load->view('administrator/procedure/detail', $data);
    }
    
	public function add($id)
	{
        $data['id'] = $id;
		$this->load->view('administrator/procedure/add', $data);
    }
    
	public function edit($id)
	{
		$data['id'] = $id;
		$this->load->view('administrator/procedure/edit', $data);
	}
}
