namespace AngularTutotial.Migrations
{
    using AngularTutotial.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AngularTutotial.Models.TodoContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AngularTutotial.Models.TodoContext context)
        {
            var r = new Random();
            var items = Enumerable.Range(0, 50).Select(o => new Todo
            {
                DueDate = new DateTime(2015, r.Next(1,12), r.Next(1,28)),
                Priority = (byte)r.Next(10),
                Text = o.ToString()
            }).ToArray();

            context.Todoes.AddOrUpdate(item => new { item.Text }, items);
        }
    }
}
