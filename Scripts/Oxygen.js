function OnTriggerEnter2D(other: Collider2D) {
    if (other.name=="Player"){
        var player:Component = other.attachedRigidbody.GetComponent(PlayerControl);
        player.isBreathing=true;
    }
}
function OnTriggerExit2D(other: Collider2D) {
    if (other.name=="Player"){
        var player:Component = other.attachedRigidbody.GetComponent(PlayerControl);
        player.isBreathing=false;
    }
}