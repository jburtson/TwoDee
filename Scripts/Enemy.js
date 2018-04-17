var health : float = 100;
var speed : int = 20;
var damage : int = 10;
private var facingRight : boolean = true;
protected var animator : Animator;

function Start () {
    animator = GetComponent(Animator);
}

function Update () {
    if (health<=0){
        Destroy(gameObject);
    }
    var player : GameObject = GameObject.Find("Player");
    var pos : float = transform.position.x;
    var h : float = transform.GetComponent.<Rigidbody2D>().velocity.x;
    //if (facingRight!=h>=0){
    if (facingRight==(pos>=player.GetComponent(Transform).position.x)){ // faces forward
        flip();
    }
    if (facingRight){
        transform.GetComponent.<Rigidbody2D>().AddForce(Vector2.right*speed);
    }
    else{
        transform.GetComponent.<Rigidbody2D>().AddForce(Vector2.right*speed*-1);
    }
    animator.SetFloat("Speed", h*h);
}
function flip(){
    facingRight = !facingRight;
    transform.localScale.x *= -1;
}
function OnCollisionEnter2D(collision : Collision2D) {
    // Get the Object that the enemy collided with, if any
    var hit = collision.transform.gameObject;
    
    // if it hit the player
    if (hit.layer == 8) {
        // Subtract one from the enemy's health
        hit.GetComponent(PlayerControl).health-=damage;
    }
}