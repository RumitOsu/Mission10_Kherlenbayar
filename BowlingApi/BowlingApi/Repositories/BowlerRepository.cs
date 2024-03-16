using System.Collections.Generic;
using System.Linq;
using BowlingApi.Interfaces;
using BowlingApi.Models;

namespace BowlingApi.Repositories
{
    public class BowlerRepository : IBowlerRepository
    {
        private readonly BowlingLeagueContext _context;

        public BowlerRepository(BowlingLeagueContext context)
        {
            _context = context;
        }

        public IEnumerable<Bowler> GetBowlersByTeam(string teamName)
        {
            // Use the Team navigation property and filter by TeamName
            return _context.Bowlers
                           .Where(b => b.Team != null && b.Team.TeamName == teamName)
                           .ToList();
        }
    }
}
