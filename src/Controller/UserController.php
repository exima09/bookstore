<?php
namespace App\Controller;
use App\Entity\User;
use App\Repository\BookRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class UserController extends AbstractController
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * BookController constructor.
     * @param UserRepository $userRepository
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(UserRepository $userRepository, EntityManagerInterface $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/users", name="book_index", methods="GET")
     * @return Response
     */
    public function index(): Response
    {
        $users = $this->userRepository->findAll();
        $ar = [];

        foreach($users as $item) {
            $ar[] = [
                'id' => $item->getId(),
                'username' => $item->getUsername(),
                'password' => $item->getPassword(),
                'roles' => $item->getRoles()
            ];
        }
        return JsonResponse::create(
             $ar
        );
    }
}
