import home from "view/home.art"

class Home{
    constructor(){
        
    }
    init(){

    }
    render(){

        var html = home();
        $(".container").html(html);
       

    }
}

export default new Home()