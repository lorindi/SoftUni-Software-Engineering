export default function Tickets(){
    return (
        <div class="container-fluid tickets" id="tickets">
            <div class="row me-row content-ct">
                <h2 class="row-title">Buy Tickets</h2>
                <div class="col-md-4 col-sm-6 col-md-offset-2">
                    <h3>Early Bird Ticket</h3>
                    <p class="price">$399</p>
                    <p>All days entry pass for all the events.</p>
                    <a href="#" class="btn btn-lg btn-red">Buy <small>(6 remaining)</small></a>
                </div>
                <div class="col-md-4 col-sm-6">
                    <h3>Workshop Pass</h3>
                    <p class="price">$199</p>
                    <p>Entry pass for each workshop</p>
                    <a href="#" class="btn btn-lg btn-red">Buy <small>(42 remaining)</small></a>
                </div>
            </div>
        </div>
    )
}