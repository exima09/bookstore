<?php

namespace App\Controller;

use App\Entity\Book;
use App\Form\BookType;
use App\Repository\BookRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/book", name="book")
 */
class BookController extends AbstractController
{
    /**
     * @var BookRepository
     */
    private $bookRepository;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * BookController constructor.
     * @param BookRepository $bookRepository
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(BookRepository $bookRepository, EntityManagerInterface $entityManager)
    {
        $this->bookRepository = $bookRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/list", name="book_index", methods="GET")
     * @param BookRepository $bookRepository
     * @return Response
     */
    public function index(BookRepository $bookRepository): Response
    {
        $books = $bookRepository->findAll();
        $ar = [];

        foreach($books as $item) {
            $ar[] = [
                'id' => $item->getId(),
                'name' => $item->getName(),
                'author' => $item->getAuthor(),
                'description' => $item->getDescription(),
                'image' => $item->getImage(),
                'onStock' => $item->getOnStock(),
                'price' => $item->getPrice()
            ];
        }
        return JsonResponse::create([
            'books' => $ar
        ]);
    }

    /**
     * @Route("/add", name="book_new")
     * @param Request $request
     * @return Response
     */
    public function add(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);


       $book = new Book(
            $data['name'],
            $data['author'],
            $data['description'],
            $data['onStock'],
            $data['image'],
            $data['price']
       );
       $this->entityManager->persist($book);
       $this->entityManager->flush();
        return JsonResponse::create([
            'message' => "dodane"
        ]);
    }

    /**
     * @Route("/book/{id}", name="book_show", methods="GET")
     * @param int $id
     * @return Response
     */
    public function show(int $id): Response
    {
        $book = $this->bookRepository->find($id);
        $json = [
            'id' => $book->getId(),
            'name' => $book->getName(),
            'author' => $book->getAuthor(),
            'description' => $book->getDescription(),
            'image' => $book->getImage(),
            'onStock' => $book->getOnStock(),
            'price' => $book->getPrice()
        ];
        return JsonResponse::create([
            'book' => $json
        ]);
    }

    /**
     * @Route("/edit/{id}", name="book_edit", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function edit(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $data = $data['body'];
        $data = json_decode($data, true);
        $book = $this->bookRepository->find($data['id']);
        $book->setName($data['name']);
        $book->setAuthor($data['author']);
        $book->setDescription($data['description']);
        $book->setOnStock($data['onStock']);
        $book->setImage($data['image']);
        $book->setPrice($data['price']);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
        return JsonResponse::create([
            'message' => "zedytowano"
        ]);
    }

    /**
     * @Route("/delete", name="book_delete", methods="POST|HEAD")
     * @param Request $request
     * @return Response
     */
    public function delete(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $book = $this->bookRepository->find($data['idDelete']);

        $this->entityManager->remove($book);
        $this->entityManager->flush();

        return JsonResponse::create([
            'message' => "usuniete"
        ]);
    }
}
