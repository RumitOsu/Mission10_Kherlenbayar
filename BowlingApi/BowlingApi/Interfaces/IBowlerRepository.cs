using System.Collections.Generic;
using BowlingApi.Models;

namespace BowlingApi.Interfaces
{
    public interface IBowlerRepository
    {
        IEnumerable<Bowler> GetBowlersByTeam(string teamName);
    }
}
