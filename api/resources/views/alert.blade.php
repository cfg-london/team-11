@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>

                    <div class="panel-body">
                        <form class="form-horizontal" method="post" action="/alert">
                            {{ csrf_field() }}
                            <input type="text" class="form-control" id="message" name="message" value="Enter a message...">
                            <br>
                            <center><button type="submit" class="btn btn-primary">Submit</button></center>
                        </form>

                    </div>

                </div>
            </div>
@endsection
