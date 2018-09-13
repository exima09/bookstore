<?php
namespace App\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class ShopController
 * @route("/")
 * @package App\Controller
 */
class BookStoreController extends Controller
{
    /**
     * @Route("/dashboard", name="dashboard")
     * @Route("/book/", name="books")
     */
    public function index()
    {
        // replace this line with your own code!
        return $this->render('react.html.twig', [
        ]);
    }
}
