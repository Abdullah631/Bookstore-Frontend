using Microsoft.AspNetCore.Mvc;

namespace FrontendBookstore.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public ActionResult AddBook()
        {
            return View();
        }
        public ActionResult AddBlog()
        {
            return View();
        }
        public ActionResult AddArrival()
        {
            return View();
        }
        public ActionResult Orders()
        {
            return View();
        }
        public ActionResult Books()
        {
            return View();
        }
        public ActionResult Arrivals()
        {
            return View();
        }
        public ActionResult Reviews()
        {
            return View();
        }
        public ActionResult ManageBlogs()
        {
            return View();
        }
        public ActionResult Settings()
        {
            return View();
        }
    }
}
