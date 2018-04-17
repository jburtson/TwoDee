#pragma strict
 
var health : float = 100;
var speed : int = 20;
var jumpHeight : int = 1000;
var bulletForce : int = 800;
var Bullet : GameObject;
private var isJumping : boolean;
private var facingRight : boolean = true;
protected var isBreathing : boolean = false;
protected var animator : Animator;

function Start () {
    animator = GetComponent(Animator);
}
function OnCollisionEnter2D(col: Collision2D){
    // check if you're falling onto a peice of the enviroment, object, or enemy, if you you stop jumping
    if (transform.GetComponent.<Rigidbody2D>().velocity.y<=0 && (col.gameObject.layer == 10 || col.gameObject.layer == 9 || col.gameObject.layer == 12)){
        animator.SetBool("Jumping", false);
        isJumping=false;
    }
}
function Update () {
    if (health<=0){
        Destroy(gameObject);
    }
    if (Input.GetButtonDown("Fire1")) {
        Fire();
    }
    if (!isBreathing){
        health-=Time.deltaTime; // loses 1 health every second
    }
    if(Input.GetAxis("Horizontal")){
        var h : float = Input.GetAxis("Horizontal");
        transform.GetComponent.<Rigidbody2D>().AddForce(Vector2.right*h*speed);
        animator.SetFloat("Speed", h*h);
        if (facingRight!=h>0){ // faces forward
            flip();
        }
    }
    if(!isJumping && Input.GetAxis("Jump")){ // jump only when haven't jumped since last touched ground
        jump();
    }
}
function flip(){
    facingRight = !facingRight;
    transform.localScale.x *= -1;
}
function jump(){
    animator.SetBool("Jumping", true);
    isJumping = true;
    transform.GetComponent.<Rigidbody2D>().AddForce(Vector2.up*jumpHeight);
}
function Fire () {
    // Create a new bullet pointing in the same direction as the gun
    var offset = 8; // the distance from your center to spawn the bullet
    var force = Vector2.right*bulletForce;
    if (!facingRight){
        offset*=-1;
        force*=-1;
    }
    var newBullet : GameObject = Instantiate(Bullet, transform.position+Vector2.right*offset, transform.rotation);
    newBullet.GetComponent.<Rigidbody2D>().AddForce(force);
    transform.GetComponent.<Rigidbody2D>().AddForce(force*-1);
}