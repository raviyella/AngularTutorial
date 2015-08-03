using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularTutotial.Models
{
    public class Todo
    {
        public int TodoId { get; set; }

        [MaxLength(800)]
        public string Text { get; set; }
        public DateTime? DueDate { get; set; }
        public int Priority { get; set; }
    }
}
