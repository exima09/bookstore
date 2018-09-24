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
     * @Route("/books", name="books")
     * @Route("/books/add", name="books_add")
     * @Route("/books/show/{id}", name="books_show")
     * @Route("/books/edit/{id}", name="books_edit")
     * @Route("/login", name="login")
     * @Route("/HomePage", name="homepage")
     * @Route("/", name="homepage")
     */
    public function index()
    {
        // replace this line with your own code!
        return $this->render('react.html.twig', [
        ]);
    }
}
