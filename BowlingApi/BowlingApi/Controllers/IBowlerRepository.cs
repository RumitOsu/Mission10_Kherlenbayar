using Microsoft.AspNetCore.Mvc;
using BowlingApi.Interfaces;

namespace BowlingApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlersController : ControllerBase
    {
        private readonly IBowlerRepository _bowlerRepository;

        public BowlersController(IBowlerRepository bowlerRepository)
        {
            _bowlerRepository = bowlerRepository;
        }

        [HttpGet("{teamName}")]
        public IActionResult GetByTeam(string teamName)
        {
            var bowlers = _bowlerRepository.GetBowlersByTeam(teamName);
            if (bowlers == null) return NotFound();

            return Ok(bowlers);
        }
    }
}
