var healAmount : int = 1;
function OnTriggerStay2D(other: Collider2D) {
    if (other.name=="Player"){
        //other.attachedRigidbody.GetComponent(PlayerControl).health+=healAmount*Time.deltaTime;
        var player:Component = other.attachedRigidbody.GetComponent(PlayerControl);
        if (player.health<100)
            player.health+=healAmount*Time.deltaTime;
    }
}