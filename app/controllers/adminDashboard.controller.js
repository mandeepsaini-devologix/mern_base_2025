
function showDashboard(req, res) {
   // res.send( 'Admin Dashboard 123' );
//    /admin/

viewObject = {
    title: 'Admin Dashboard',
    userName: 'Mandeep Saini',
    projectName: 'NodeJS Sample',
    topMenu: [
        { name: 'Dashboard', link: '/admin', isActive: true },
        { name: 'Products', link: '/admin/products' , isActive: true},
        { name: 'Orders', link: '/admin/orders', isActive: false }
    ]
};




    res.render('admin/dashboard',{'viewData': viewObject});
}



module.exports = {
    showDashboard,
    
};


