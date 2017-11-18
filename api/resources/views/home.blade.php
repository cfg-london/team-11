@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>



                <div class="panel-body">

                    <table style="width:40%">
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Urgency</th>
                            <th>Type</th>
                            <th>Reference_id</th>
                        </tr>
                        @foreach($references as $reference)
                            <tr>
                                <td>{{ $reference->name }}</td>
                                <td>{{ $reference->phone }}</td>
                                <td>{{ $reference->address }}</td>
                                <td>{{ $reference->urgency }}</td>
                                <td>{{ $reference->type }}</td>
                                <td>{{ $reference->referee_id }}</td>
                                <td>{{ $reference->notes }}</td>
                            </tr>
                        @endforeach

                    </table>

                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}

                            @foreach($references as $reference)

                                {{ $reference->name }}

                            @endforeach

                        </div>
                    @endif

                </div>

            </div>
        </div>
    </div>
</div>
@endsection
