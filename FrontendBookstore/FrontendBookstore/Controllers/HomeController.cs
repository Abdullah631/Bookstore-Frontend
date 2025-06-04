using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FrontendBookstore.Models;

namespace FrontendBookstore.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    bool loggedin;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    public ViewResult Index()
    {
        return View();
    }
    public ViewResult Blogs()
    {
        return View();
    }
    public ViewResult Categories()
    {
        return View();
    }
    public ViewResult Arrivals()
    {
        return View();
    }
    public ViewResult Reviews()
    {
        return View();
    }
    public IActionResult Privacy()
    {
        return View();
    }
    public ViewResult UserDashboard()
    {
        return View();
    }
    public IActionResult Logger()
    {
        if (loggedin)
        {
            return RedirectToAction("UserDashboard");
        }
        else
        {
            return RedirectToAction("Login");
        }
    }

    [HttpGet]
    public ViewResult Login()
    {
        return View();
    }
    public ViewResult BlogPost()
    {
        return View();
    }
    public ViewResult Bookdetails()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Login(LoginViewModel model)
    {
    

        if (model.UserRole == "admin")
        {
            return RedirectToAction("Index", "Admin");
        }
        else
        {
            loggedin = true;
            return RedirectToAction("UserDashboard", "Home");
        }

    }

    public ViewResult Register()
    {
        return View();
    }
    public ViewResult Favourites()
    {
        return View();
    }
    public ViewResult Cart()
    {
        return View();
    }
    public ViewResult Checkout()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
