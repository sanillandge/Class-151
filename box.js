AFRAME.registerComponent('box', {
    schema: {
        moveZ: {type: "number", default: 1}
    },
    tick: function(){
        this.data.moveZ +=0.01
        var pos = this.el.getAttribute("position")
        pos.z = this.data.moveZ
        this.el.setAttribute("position", {x: pos.x, y:pos.y, z:pos.z})
    }



})